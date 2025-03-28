export default function Checkbox({ className = '', ...props }) {
    return (
        <input
            {...props}
            type="checkbox"
            className={
                'rounded border-gray-500 text-indigo-600 shadow-sm focus:ring-indigo-200 dark:border-gray-100 dark:bg-gray-100 dark:focus:ring-indigo-100 dark:focus:ring-offset-gray-100 ' +
                className
            }
        />
    );
}
