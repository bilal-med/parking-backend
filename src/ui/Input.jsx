import React from "react";

import { Icon } from "@iconify/react";

const Input = ({
  label,
  type,
  icon,
  error,
  errorMessage,
  style,
  change,
  options,

  value,
  ...rest
}) => {
  return (
    <div className="w-full">
      <label
        htmlFor={"input-" + label}
        className={`block mb-2 text-sm font-medium ${
          error ? "text-red-600" : "text-gray-900"
        } `}
      >
        {label}
      </label>
      <div className="relative">
        {icon && (
          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
            <Icon
              icon={icon ?? ""}
              fontSize={25}
              className={`${error ? "text-red-600" : "text-gray-500 "}`}
            />
          </div>
        )}
        {type === "select" ? (
          <select
            {...rest}
            id={"input-" + label}
            value={value}
            className={`
              ${icon && "pl-10"}
              ${
                error ? "border border-red-500" : "border-0"
              }  px-3 py-2 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full `}
          >
            <option key={0} value={0}>
              veillez choisir une option
            </option>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}

                {/* {option.icon && (
                                    <span className="ml-2">
                                        <Image
                                            src={option.icon}
                                            alt={option.label}
                                            width={16}
                                            height={16}
                                        />
                                    </span>
                                )} */}
              </option>
            ))}
          </select>
        ) : type === "date" ? (
          <input
            type={type}
            {...rest}
            id={"input-" + label}
            value={value}
            className={`
                ${icon && "pl-10"}
                ${
                  error ? "border border-red-500" : "border-0"
                }  px-3 py-2 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full `}
            style={{ appearance: "textfield" }}
          />
        ) : type === "datetime-local" ? (
          <input
            type={type}
            {...rest}
            id={"input-" + label}
            value={value}
            className={`
              ${icon && "pl-10"}
              ${
                error ? "border border-red-500" : "border-0"
              }  px-3 py-2 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full `}
          />
        ) : (
          <input
            type={type}
            {...rest}
            id={"input-" + label}
            value={value}
            className={`
              ${icon && "pl-10"}
              ${
                error ? "border border-red-500" : "border-0"
              }  px-3 py-2 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full `}
          />
        )}
      </div>
      {error && (
        <p className="text-sm mt-2 text-red-600 ">
          <span className="font-medium">{errorMessage}</span>
        </p>
      )}
    </div>
  );
};

export default Input;
