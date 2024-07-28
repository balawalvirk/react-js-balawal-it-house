function TransparentPrimaryBtn({
  label,
  leftIcon,
  rightIcon,
  labelClassName,
  className = "",
  rightIconClass,
}) {
  return (
    <button
      className={`${className} capitalize bg-transparent flex gap-2 items-center relative rounded-[24px] py-[24px] px-[24px]`} style={{border: '1px solid #6ac68f'}}
    >
      {leftIcon && <img src={leftIcon} />}
      <span className={labelClassName}>{label}</span>
      {rightIcon && <img src={rightIcon} className={rightIconClass} />}
    </button>
  );
}

export default TransparentPrimaryBtn;
