export default function SolutionComponent({ title, description }: any) {
  return (
    <div className="rounded-xl mt-6 mb-10 p-4 bg-secondarylight drop-shadow">
      <h4 className="text-lg sm:text-xl manrope-bold">{title}</h4>
      <p className="mt-2 sm:text-lg">{description}</p>
    </div>
  );
}
