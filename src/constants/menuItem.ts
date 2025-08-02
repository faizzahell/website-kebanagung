import {
  Home,
  FileText,
  BarChart2,
  Users,
  TrendingUp,
  Newspaper,
  ShoppingCart,
  FolderLock,
  GalleryThumbnails,
} from "lucide-react";

export interface MenuItem {
  name: string;
  icon: React.ElementType;
  path: string;
}

export const menuItems: MenuItem[] = [
  { name: "Beranda", icon: Home, path: "/" },
  { name: "Profil Desa", icon: FileText, path: "/profile" },
  { name: "Infografis", icon: BarChart2, path: "/infografis" },
  { name: "Listing", icon: Users, path: "/listing" },
  { name: "IDM", icon: TrendingUp, path: "/idm" },
  { name: "Berita", icon: Newspaper, path: "/news" },
  { name: "Belanja", icon: ShoppingCart, path: "/shopping" },
  { name: "PPID", icon: FolderLock, path: "/documentation" },
  { name: "Galeri", icon: GalleryThumbnails, path: "/gallery" },
];
