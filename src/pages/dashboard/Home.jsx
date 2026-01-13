import React from 'react';

const Home = () => {
  // Statistika məlumatları
  const stats = [
    { title: "Ümumi İstifadəçi", value: "2,543", change: "+12.5%", color: "text-blue-600" },
    { title: "Aylıq Gəlir", value: "$12,850", change: "+8.2%", color: "text-green-600" },
    { title: "Aktiv Sifarişlər", value: "145", change: "-2.4%", color: "text-orange-600" },
    { title: "Sistem Yükü", value: "42%", change: "Stabil", color: "text-purple-600" },
  ];

  // Son əməliyyatlar məlumatları
  const transactions = [
    { id: "#TR-9932", user: "Əli Məmmədov", amount: "$120.00", status: "Tamamlandı" },
    { id: "#TR-8821", user: "Aygün Əliyeva", amount: "$450.00", status: "Gözləmədə" },
    { id: "#TR-7710", user: "Vüqar Həsənov", amount: "$89.50", status: "Tamamlandı" },
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen font-sans">
      {/* Üst Başlıq */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Xoş Gəlmisiniz!</h1>
          <p className="text-gray-500 text-sm">Layihənizin ümumi icmalı və statistikasını buradan izləyə bilərsiniz.</p>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors shadow-sm">
          Hesabat Yüklə
        </button>
      </div>

      {/* Statistika Kartları */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((item, index) => (
          <div key={index} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
            <h3 className="text-gray-400 text-sm font-medium mb-2">{item.title}</h3>
            <div className="flex items-end justify-between">
              <span className="text-2xl font-bold text-gray-800">{item.value}</span>
              <span className={`text-xs font-semibold px-2 py-1 rounded ${index === 2 ? 'bg-red-50 text-red-600' : 'bg-green-50 text-green-600'}`}>
                {item.change}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Əsas Grid: Cədvəl və Qısa Məlumatlar */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* Son Əməliyyatlar Cədvəli */}
        <div className="lg:col-span-2 bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="p-5 border-b border-gray-50 flex justify-between items-center">
            <h3 className="font-bold text-gray-700">Son Əməliyyatlar</h3>
            <span className="text-blue-600 text-sm cursor-pointer hover:underline">Hamısına bax</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-gray-50 text-gray-400 text-xs uppercase">
                <tr>
                  <th className="px-6 py-3 font-medium">ID</th>
                  <th className="px-6 py-3 font-medium">İstifadəçi</th>
                  <th className="px-6 py-3 font-medium">Məbləğ</th>
                  <th className="px-6 py-3 font-medium">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50 text-sm">
                {transactions.map((tr, i) => (
                  <tr key={i} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 font-mono text-gray-500">{tr.id}</td>
                    <td className="px-6 py-4 font-medium text-gray-700">{tr.user}</td>
                    <td className="px-6 py-4 text-gray-700">{tr.amount}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 rounded-full text-xs ${tr.status === 'Tamamlandı' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                        {tr.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Sağ Panel: Bildirişlər/Aktivlik */}
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
          <h3 className="font-bold text-gray-700 mb-4">Sistem Mesajları</h3>
          <div className="space-y-4">
            <div className="flex gap-4 items-start">
              <div className="w-2 h-2 mt-2 rounded-full bg-blue-500 shrink-0 shadow-[0_0_8px_rgba(59,130,246,0.5)]"></div>
              <div>
                <p className="text-sm text-gray-700 leading-snug font-medium">Server yenilənməsi tamamlandı.</p>
                <span className="text-[10px] text-gray-400 uppercase font-bold">10 dəq əvvəl</span>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-2 h-2 mt-2 rounded-full bg-orange-500 shrink-0"></div>
              <div>
                <p className="text-sm text-gray-700 leading-snug">Yeni administrativ giriş qeydə alındı.</p>
                <span className="text-[10px] text-gray-400 uppercase font-bold">1 saat əvvəl</span>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-2 h-2 mt-2 rounded-full bg-green-500 shrink-0"></div>
              <div>
                <p className="text-sm text-gray-700 leading-snug">Həftəlik ehtiyat nüsxə yaradıldı.</p>
                <span className="text-[10px] text-gray-400 uppercase font-bold">2 saat əvvəl</span>
              </div>
            </div>
          </div>
          
          <div className="mt-10 p-4 bg-blue-50 rounded-lg border border-blue-100">
            <p className="text-xs text-blue-700 font-bold mb-1 italic underline">TEXNİKİ DƏSTƏK</p>
            <p className="text-xs text-blue-600">Hər hansı bir problem yaranarsa, birbaşa admin ilə əlaqə saxlayın.</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Home;