export const DetailQuestion = (props) => {
  const { asked } = props;

  const { Question, Answer } = asked;

  return (
    <details className="group border-0 border-b-2 py-3 w-[95%] cursor-pointer">
      <summary className="text-[.85rem] font-semibold text-blue-darker group-open:text-green-500 list-none flex justify-between items-center hover:text-red-400">
        {Question}
        <span className="group-open:hidden mr-4">⬇️</span>
        <span className="hidden group-open:inline mr-4">⬆️</span>
      </summary>
      <p className="mt-3 text-gray-500">{Answer}</p>
    </details>
  );
};
