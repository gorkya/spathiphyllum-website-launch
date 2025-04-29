import { Link } from "react-router-dom";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { ChevronRight } from "lucide-react";

interface SitemapItem {
  title: string;
  anchor: string;
}

interface SitemapListProps {
  title: string;
  path: string;
  description: string;
  subpages: SitemapItem[];
}

export function SitemapList({ title, path, description, subpages }: SitemapListProps) {
  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader>
        <CardTitle>
          <Link to={path} className="text-xl md:text-2xl hover:text-primary transition-colors flex items-center">
            {title} 
            <ChevronRight className="ml-2 h-5 w-5 text-muted-foreground" />
          </Link>
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
          {subpages.map((item) => (
            <li key={item.anchor} className="flex items-center">
              <span className="h-1.5 w-1.5 rounded-full bg-primary mr-3"></span>
              <Link 
                to={item.anchor} 
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
