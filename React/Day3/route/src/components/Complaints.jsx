const Complaints = () => {
  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold">Complaints</h1>

      <form className="mt-6 max-w-lg">

        <input
          type="text"
          placeholder="Your Name"
          className="w-full border p-3 rounded mb-4"
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-3 rounded mb-4"
        />

        <textarea
          placeholder="Enter your complaint"
          className="w-full border p-3 rounded mb-4"
          rows="5"
        ></textarea>

        <button
          type="submit"
          className="bg-blue-700 text-white px-6 py-3 rounded"
        >
          Submit Complaint
        </button>

      </form>
    </div>
  );
};

export default Complaints;