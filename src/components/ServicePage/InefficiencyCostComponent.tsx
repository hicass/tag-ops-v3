export default function InefficiencyCostComponent({title, description}: any) {
  return (
    <div className="mt-10">
      <h3 className="text-lg sm:text-xl manrope-bold">{title}</h3>
      <p className="mt-2 sm:text-lg">{description}</p>
    </div>
  );
}
