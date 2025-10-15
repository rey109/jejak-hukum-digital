import { query } from "./_generated/server";
import { v } from "convex/values";

export const getArticleContent = query({
  args: {},
  handler: async () => {
    return {
      title: "Pasal 26A – Bukti Elektronik dalam Pemberantasan Korupsi",
      subtitle: "Jejak Digital, Bukti yang Diakui Hukum",
      sections: {
        background: {
          title: "Latar Belakang",
          content: "Di era digital, kejahatan korupsi meninggalkan jejak elektronik. Pasal 26A hadir sebagai respons hukum terhadap perkembangan teknologi informasi dalam pemberantasan korupsi.",
          timeline: [
            { year: "2001", event: "UU No. 20 Tahun 2001 disahkan" },
            { year: "2010", event: "Peningkatan kasus korupsi digital" },
            { year: "2015", event: "Bukti elektronik mulai dominan" },
            { year: "2020", event: "Era digitalisasi penuh" }
          ]
        },
        article: {
          title: "Isi Pasal 26A",
          content: "Alat bukti yang sah berupa:",
          points: [
            {
              id: "a",
              title: "Huruf (a): Alat Bukti Elektronik",
              text: "Informasi yang diucapkan, dikirim, diterima, atau disimpan secara elektronik dengan alat optik atau yang serupa dengan itu",
              examples: ["Email korespondensi", "Pesan WhatsApp", "Rekaman suara digital", "Video conference"]
            },
            {
              id: "b",
              title: "Huruf (b): Dokumen Digital",
              text: "Dokumen yakni setiap rekaman data atau informasi yang dapat dilihat, dibaca, dan atau didengar yang dapat dikeluarkan dengan atau tanpa bantuan suatu sarana",
              examples: ["Dokumen PDF", "Spreadsheet keuangan", "Database transaksi", "Foto digital"]
            }
          ]
        },
        explanation: {
          title: "Penjelasan Hukum",
          cards: [
            {
              icon: "⚖️",
              title: "Bukti Elektronik Diakui Sah",
              detail: "Pasal 26A memberikan legitimasi hukum terhadap bukti elektronik, menjadikannya setara dengan bukti konvensional dalam proses peradilan."
            },
            {
              icon: "💻",
              title: "Dokumen Tidak Harus Kertas",
              detail: "Definisi dokumen diperluas mencakup format digital, mengakui bahwa informasi modern tersimpan dalam bentuk elektronik."
            },
            {
              icon: "📄",
              title: "Petunjuk dari Data Digital",
              detail: "Data digital dapat menjadi petunjuk yang mengarah pada fakta tindak pidana korupsi, memperkuat proses pembuktian."
            }
          ]
        },
        cases: {
          title: "Contoh Kasus",
          examples: [
            {
              id: 1,
              title: "Kasus Suap Proyek Infrastruktur",
              evidence: "Email & Transfer Bank",
              description: "Korespondensi email antara pejabat dan kontraktor membuktikan kesepakatan suap. Rekening bank digital menunjukkan aliran dana ilegal.",
              analysis: "Bukti elektronik berupa email dan mutasi rekening menjadi alat bukti utama yang sah menurut Pasal 26A."
            },
            {
              id: 2,
              title: "Pengadaan Barang Fiktif",
              evidence: "Dokumen Digital & Database",
              description: "Dokumen pengadaan dalam format PDF dan database inventaris menunjukkan ketidaksesuaian antara pembelian dan barang yang diterima.",
              analysis: "Dokumen digital diakui sebagai bukti sah untuk membuktikan adanya pengadaan fiktif."
            },
            {
              id: 3,
              title: "Gratifikasi Tidak Dilaporkan",
              evidence: "Rekaman & Chat",
              description: "Rekaman percakapan dan chat WhatsApp membuktikan penerimaan gratifikasi yang tidak dilaporkan kepada KPK.",
              analysis: "Informasi elektronik berupa rekaman dan chat menjadi alat bukti yang kuat di pengadilan."
            }
          ]
        },
        impact: {
          title: "Dampak & Makna",
          points: [
            {
              icon: "🔄",
              title: "Modernisasi Sistem Pembuktian",
              text: "Hukum beradaptasi dengan perkembangan teknologi, memungkinkan penggunaan bukti digital dalam proses peradilan."
            },
            {
              icon: "🛡️",
              title: "Perlindungan Hukum Data Digital",
              text: "Memberikan kepastian hukum bahwa data digital memiliki kekuatan pembuktian yang sama dengan bukti fisik."
            },
            {
              icon: "👁️",
              title: "Transparansi Penegakan Hukum",
              text: "Jejak digital sulit dihapus, meningkatkan efektivitas pemberantasan korupsi dan menciptakan efek jera."
            }
          ]
        },
        reflection: {
          title: "Refleksi",
          quote: "Pasal 26A membuktikan bahwa hukum bisa beradaptasi dengan teknologi. Di era digital, keadilan tidak lagi terbatas pada bukti fisik—jejak elektronik kini menjadi saksi yang tak terbantahkan."
        }
      }
    };
  }
});
