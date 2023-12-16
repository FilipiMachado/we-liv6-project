interface UserPageProps {
  params: {
    username: string;
  };
}

const UserPage = ({ params }: UserPageProps) => {
  return (
    <div>
      <div>User: {params.username}</div>
    </div>
  );
};

export default UserPage;
