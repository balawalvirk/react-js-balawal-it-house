function Button({
  label,
  leftIcon,
  rightIcon,
  labelClassName,
  className,
  rightIconClass,
}) {
  return (
    <button
      className={`${className} capitalize text-white primary-btn-background rounded-[16px] flex gap-2 items-center`}
    >
      {leftIcon && <img src={leftIcon} />}
      <span className={labelClassName}>{label}</span>
      {rightIcon && <img src={rightIcon} className={rightIconClass} />}
    </button>
  );
}

export default Button;
