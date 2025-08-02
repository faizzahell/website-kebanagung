import React, { useState } from 'react';
import { documents, type DocumentData } from '../constants/document';
import { Eye, Download, FileText, Calendar, File, ArrowRight } from 'lucide-react';

const Documentation: React.FC = () => {
  const [selectedDoc, setSelectedDoc] = useState<DocumentData | null>(null);

  const openViewer = (doc: DocumentData) => setSelectedDoc(doc);
  const closeViewer = () => setSelectedDoc(null);

  return (
    <section className="relative px-4 py-16 md:px-16 bg-gradient-to-br from-slate-50 via-white to-green-50/30 overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-700/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-emerald-600/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-700/10 rounded-full mb-4">
            <div className="w-2 h-2 bg-green-700 rounded-full animate-pulse"></div>
            <span className="text-green-700 font-semibold text-sm">Dokumen Publik</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            PPID <span className="text-green-700">Desa</span>
          </h1>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Akses informasi dan dokumen resmi desa yang terbuka untuk masyarakat dalam sistem digital terintegrasi
          </p>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-green-100/50">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-gradient-to-br from-green-700 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-800">
                Dokumen & Regulasi
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-green-700 to-green-500 rounded-full mt-2"></div>
            </div>
          </div>

          <p className="text-slate-600 mb-8 leading-relaxed">
            Sistem dokumentasi digital yang menyediakan akses transparan terhadap dokumen resmi, 
            regulasi, dan informasi publik desa untuk mendukung keterbukaan informasi
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {documents.map((doc) => (
              <DocumentCard 
                key={doc.id}
                doc={doc}
                onView={() => openViewer(doc)}
              />
            ))}
          </div>
        </div>
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-green-700 to-green-600 rounded-xl p-6 md:p-8 text-white relative overflow-hidden shadow-xl">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMiIgZmlsbD0iIzFFNzA0QiIgZmlsbC1vcGFjaXR5PSIwLjIiLz4KPC9zdmc+')] opacity-30"></div>
            <div className="relative z-10">
              <h3 className="text-xl md:text-2xl font-bold mb-2">
                Ingin Mengajukan Permohonan Informasi?
              </h3>
              <p className="text-green-100 mb-6 max-w-xl mx-auto">
                Tim kami siap membantu Anda mengakses informasi yang dibutuhkan
              </p>
              <button className="group bg-white text-green-700 px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="flex items-center gap-2">
                  <span>Hubungi Petugas</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {selectedDoc && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 md:p-6"
          onClick={closeViewer}
        >
          <div
            className="relative w-full max-w-6xl h-[90vh] bg-white rounded-2xl overflow-hidden shadow-2xl border border-green-100"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center p-6 border-b border-green-100 bg-gradient-to-r from-green-50 to-white">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-green-700 to-green-600 rounded-lg flex items-center justify-center">
                  <FileText className="w-4 h-4 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-slate-800">{selectedDoc.title}</h3>
              </div>
              <button
                onClick={closeViewer}
                className="w-10 h-10 bg-slate-100 hover:bg-green-100 hover:text-green-700 rounded-full flex items-center justify-center transition-all duration-200 group"
              >
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <iframe
              src={`/documents/${selectedDoc.fileName}`}
              title={selectedDoc.title}
              className="w-full h-[calc(100%-80px)]"
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
};

function DocumentCard({ doc, onView }: { doc: DocumentData; onView: () => void }) {
  return (
    <div className="group relative overflow-hidden bg-gradient-to-br from-white to-slate-50 border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-[1.02] hover:border-green-200">
      <div className="absolute inset-0 bg-gradient-to-r from-green-700/5 to-green-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
      
      <div className="relative z-10 flex flex-col h-full">
        <div className="flex items-start gap-3 mb-4">
          <div className="w-10 h-10 bg-gradient-to-br from-green-100 to-green-50 border border-green-200 rounded-lg flex items-center justify-center group-hover:from-green-700 group-hover:to-green-600 group-hover:border-green-700 transition-all duration-300">
            <File className="w-5 h-5 text-green-700 group-hover:text-white transition-colors duration-300" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-semibold text-slate-800 group-hover:text-green-700 transition-colors duration-300 line-clamp-2">
              {doc.title}
            </h3>
          </div>
        </div>

        <p className="text-sm text-slate-600 mb-4 leading-relaxed flex-1">
          {doc.description}
        </p>

        <div className="flex items-center gap-2 mb-6 text-xs text-slate-500">
          <Calendar className="w-3 h-3" />
          <span>Diupload: {new Date(doc.uploadDate).toLocaleDateString('id-ID')}</span>
        </div>

        <div className="flex gap-3 mt-auto">
          <button
            onClick={onView}
            className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-green-700 to-green-600 text-white px-4 py-3 rounded-lg text-sm font-medium hover:shadow-lg hover:scale-105 transition-all duration-200 group"
          >
            <Eye className="w-4 h-4 group-hover:scale-110 transition-transform" />
            <span>Lihat</span>
          </button>
          <a
            href={`/documents/${doc.fileName}`}
            download
            className="flex items-center justify-center gap-2 border-2 border-green-200 text-green-700 px-4 py-3 rounded-lg text-sm font-medium hover:bg-green-50 hover:border-green-300 hover:scale-105 transition-all duration-200 group"
          >
            <Download className="w-4 h-4 group-hover:scale-110 transition-transform" />
            <span className="hidden sm:inline">Unduh</span>
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-1 bg-slate-200 overflow-hidden">
        <div className="h-full bg-gradient-to-r from-green-700 to-green-500 w-0 group-hover:w-full transition-all duration-700 ease-out"></div>
      </div>
    </div>
  );
}

export default Documentation;