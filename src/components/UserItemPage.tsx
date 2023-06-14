import React, { FC, useEffect, useState } from "react";
import { IUser } from "../types/types";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

interface UserItemPageParams {
  [key: string]: string | undefined;
}
const UserItemPage: FC = () => {
  const [user, setUser] = useState<IUser | null>(null);

  useEffect(() => {
    fetchUser();
  }, []);
  const params = useParams<UserItemPageParams>();
  const navigate = useNavigate();
  async function fetchUser() {
    try {
      const response = await axios.get<IUser>(
        "https://jsonplaceholder.typicode.com/users/" + params.id
      );
      setUser(response.data);
    } catch (error) {
      alert(error);
    }
  }
  return (
    <div>
      <button onClick={() => navigate("/users")}>Back</button>
      <h1>Страница поьзователя {user?.name} </h1>
      <div>{user?.email}</div>
      <div>
        {user?.address.city} {user?.address.street} {user?.address.zipcode}
      </div>
    </div>
  );
};

export default UserItemPage;
