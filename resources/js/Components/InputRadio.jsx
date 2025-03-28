import { forwardRef, useEffect, useImperativeHandle, useRef } from 'react';

export default forwardRef(function TextInput(
    { type = 'text', className = '', isFocused = false, ...props },
    ref,
) {
    const localRef = useRef(null);

    useImperativeHandle(ref, () => ({
        focus: () => localRef.current?.focus(),
    }));

    return (
        <input
            {...props}
            type={type}
            className={
                'custom-radio text-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 dark:focus:border-indigo-600 dark:bg-gray-800 dark:border-gray-700' +
                className
            }
            ref={localRef}
        />
    );
});
