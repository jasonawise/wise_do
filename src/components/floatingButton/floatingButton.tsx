export default function FloatingButton({
  handleFloatingButtonClick,
}: {
  handleFloatingButtonClick: () => void;
}) {
  return (
    <div className="fixed bottom-0 right-0 m-4">
      <button
        type="button"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        onClick={handleFloatingButtonClick}
      >
        +
      </button>
    </div>
  );
}
