export interface DocumentData {
  id: number;
  title: string;
  description: string;
  uploadDate: string;
  fileName: string;
}

export const documents: DocumentData[] = [
  {
    id: 1,
    title: "Laporan Realisasi APBDes 2024",
    description: "Dokumen ini berisi laporan realisasi penggunaan anggaran pendapatan dan belanja desa tahun 2024.",
    uploadDate: "2025-07-20",
    fileName: "PERDES_RKP_DESA_2024.pdf"
  },
  {
    id: 2,
    title: "Perdes Tentang Transparansi Informasi Publik",
    description: "Peraturan Desa yang mengatur keterbukaan informasi publik di lingkungan Pemerintah Desa.",
    uploadDate: "2025-06-05",
    fileName: "PERDES_RKP_DESA_2024.pdf"
  },
  {
    id: 3,
    title: "Rencana Pembangunan Jangka Menengah Desa (RPJMDes)",
    description: "RPJMDes Desa Keban Agung tahun 2025-2030 sebagai acuan pembangunan desa.",
    uploadDate: "2025-05-15",
    fileName: "PERDES_RKP_DESA_2024.pdf"
  }
];
