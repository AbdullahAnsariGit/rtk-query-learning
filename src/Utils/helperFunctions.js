import moment from 'moment';
import {showToast} from './toast';
import {useRef} from 'react';

/**
 * A generic function to make API requests.
 *
 * @param {function} apiCallFunction - The API call function (e.g. `verifyEmail`, `getUserDetails`, etc.)
 * @param {Object} params - The parameters to pass to the API function (e.g., {email, type}).
 * @param {function} [setStep] - Optional: A callback to handle step changes (for multi-step processes).
 * @returns {Promise<any>} - The response from the API call.
 */
export const makeApiCall = async (apiCallFunction, params, setStep) => {
  LOG('params', params);
  try {
    const response = await apiCallFunction(params).unwrap();
    LOG('API Response:', response, 'success');
    showToast(response?.message || 'Success');
    // For Forgot Pass Flow
    if (setStep) {
      setStep(prevStep => prevStep + 1);
    }
    return response;
  } catch (err) {
    LOG('API Error:', err, 'error');
    showToast(err?.data?.message || 'An error occurred');
  }
};

export const jsonToFormdata = data => {
  //saadia's form data func //formatData

  var form_data = new FormData();

  for (var key in data) {
    if (Array.isArray(data[key])) {
      var i = 0;

      var datakey = data[key];

      for (var newkey in datakey) {
        if (datakey[newkey].name) {
          form_data.append(key + `[${i}][name]`, datakey[newkey].name);

          i++;
        } else {
          form_data.append(key + `[${i}]`, datakey[newkey]);

          i++;
        }
      }
    } else if (typeof data[key] == 'object') {
      form_data.append(key, data[key]);
    } else {
      form_data.append(key, data[key]);
    }
  }

  return form_data;
};

export const formatDate = (timestamp, type) => {
  if (!timestamp) {
    return '';
  }
  return type == 'dmy'
    ? moment(timestamp).format('DD MMM YYYY')
    : moment(timestamp).format('DD MMMM YYYY hh:mm A');
};

export const timeAgo = date => {
  const now = new Date();
  const diff = now - new Date(date); // Difference in milliseconds

  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (seconds < 60) return `${seconds} seconds ago`;
  if (minutes < 60) return `${minutes} min ago`;
  if (hours < 24) return `${hours} hours ago`;
  return `${days} day${days > 1 ? 's' : ''} ago`;
};

export const formattedTime = createdAt => moment(createdAt).format('hh:mm A');

// Define a constant for logging tag to maintain consistency
const TAG = '__API__';

/**
 * A generic function to log messages in development mode.
 *
 * @param {String} label - The label to describe the log message (e.g., "API Response", "Error").
 * @param {Object} data - The data to log (e.g., the response object, error object).
 * @param {String} [type='success'] - The log type; can be 'success' (default), 'error', or 'info'.
 */
export const LOG = (label, data, type = 'success') => {
  if (__DEV__) {
    switch (type) {
      case 'error':
        console.log(`${TAG}❎__${label}__ :`, data);
        break;
      case 'info':
        console.log(`${TAG}ℹ️__${label}__ :`, data);
        break;
      case 'success':
      default:
        console.log(`${TAG}✅__${label}__ :`, data);
        break;
    }
  }
};

/**
 * Debounce function that delays the execution of a given function.
 * @param {Function} func - The function to be debounced.
 * @param {number} delay - The debounce delay in milliseconds.
 * @returns {Function} - A debounced version of the input function.
 */
export const useDebounce = (func, delay) => {
  const timeoutRef = useRef(null);

  const debouncedFunction = (...args) => {
    // Clear the previous timeout if any
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Set a new timeout to invoke the function after the delay
    timeoutRef.current = setTimeout(() => {
      func(...args);
    }, delay);
  };

  return debouncedFunction;
};
