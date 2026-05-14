const DestinationDetailPage = async ({ params }) => {
  const { id } = await params;
  console.log(id, "details");

  return (
    <div>
      <h2>Details are headers</h2>
    </div>
  );
};

export default DestinationDetailPage;
