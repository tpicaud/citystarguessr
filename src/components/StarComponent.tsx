import StarEntity from "@/entities/StarEntity";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function StarComponent({ star }: Readonly<{ star: StarEntity }>) {
  return (
    <Card className="absolute top-0 right-0 m-4 w-auto h-auto min-w-[6em] max-w-[10vw] z-10">
      <CardMedia
        component="img"
        image={star.image}
        alt="pas de photo"
        className="object-cover"
      />
      <CardContent className="flex flex-col break-words">
        <Typography component="div" className=" text-xs md:text-sm lg:text-base font-bold">
          {star.name}
        </Typography>
      </CardContent>
    </Card>
  );
}