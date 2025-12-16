import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Expand } from "lucide-react";

export default function Member_Card({ name, role, genre, photo, about }) {
  return (
    <Card className="bg-gray-50 rounded-xl p-8 text-center hover:shadow-lg hover:border-primary border border-gray-200 transition-all duration-200">
      <div className="w-24 h-24 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full mx-auto mb-4 flex items-center justify-center">
        <Avatar className="w-full h-full object-cover rounded-full">
          <AvatarImage
            src={photo}
            alt={name}
            className="w-full h-full object-cover rounded-full"
          />
          <AvatarFallback />
        </Avatar>
      </div>
      <h3 className="text-lg font-semibold text-secondary mb-1">{name}</h3>
      <p className="text-primary font-semibold text-sm mb-2">{role}</p>
      <p className="text-gray-600 text-sm">{genre}</p>
      {/* <Button size="icon" variant="default" >
        <Expand />
      </Button> */}
    </Card>
  );
}
