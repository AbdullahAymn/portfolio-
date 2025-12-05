export default function Label({
  value,
  text,
  labelFor,
}: {
  value: string;
  text: string;
  labelFor: string;
}) {
  return (
    <label
      htmlFor={labelFor}
      className={`absolute left-2 ${
        !!value ? "!text-xs !-top-2 text-white bg-[#26a77d]" : "!top-3 "
      } px-1 text-gray-600 pointer-events-none transition-all duration-200
peer-placeholder-shown:top-5 peer-placeholder-shown:text-gray-400 peer-focus:!text-xs
peer-placeholder-shown:text-base peer-focus:!-top-2 peer-focus:text-white peer-focus:bg-[#26a77d] rounded-full  peer-focus:text-base peer-focus:font-semibold
`}
    >
      {text}
    </label>
  );
}
