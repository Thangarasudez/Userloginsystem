import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, CardContent, Typography } from "@mui/material";
axios.defaults.withCredentials = true;

const Welcome = () => {
  const [user, setUser] = useState();

  const sendRequest = async () => {
    const response = await axios
      .get("http://localhost:5000/api/user", {
        withCredentials: true,
      })
      .catch((err) => console.log(err));
    const data = await response.data;
    return data;
  };

  useEffect(() => {
    sendRequest().then((data) => setUser(data.user));
  }, []);
  return (
    <div className="card">
      {user && (
        <div>
          <h2>User</h2>
          <br />
          <Card sx={{ maxWidth: 345 }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {user.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {user.email}
              </Typography>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default Welcome;
