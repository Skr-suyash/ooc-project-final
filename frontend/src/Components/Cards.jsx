import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Cards = ({ data }) => {
  return (
    <div
      className="cards-container"
      style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}
    >
      {data.length > 0 ? (
        data.map((item, index) => (
          <Card key={index} sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image="/static/images/cards/contemplative-reptile.jpg" // Placeholder image, can replace with real image if available
              title={item.role}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {item.role}
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                Name: {item.name} <br />
                Email: {item.email} <br />
                Phone: {item.phone} <br />
                City: {item.city}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        ))
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
};

export default Cards;
