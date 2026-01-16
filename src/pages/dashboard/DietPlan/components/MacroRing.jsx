import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

// --- SHADCN COMPONENTS ---
import { Card, CardContent } from "@/components/ui/shared/card";
import { Badge } from "@/components/ui/shared/badge";

const MacroRing = ({ label, current, target, color }) => {
    const percentage = Math.min(100, Math.round((current / target) * 100));
    const remaining = Math.max(0, target - current);

    const data = [
        { name: 'Consumed', value: current },
        { name: 'Remaining', value: remaining },
    ];

    return (
        <Card className="border-white/5 bg-zinc-900/50 relative overflow-hidden group shadow-none">
            {/* Arxa fon parıltısı (Glow Effect) */}
            <div
                className="absolute -top-10 -right-10 w-32 h-32 blur-[60px] opacity-10 transition-opacity duration-500 group-hover:opacity-25 pointer-events-none"
                style={{ backgroundColor: color }}
            />

            <CardContent className="p-5 flex items-center justify-between h-28">

                {/* Sol tərəf: Info */}
                <div className="flex flex-col justify-center gap-1 z-10">
                    <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                        {label}
                    </span>

                    <div className="flex items-baseline gap-1.5">
                        <span className="text-3xl font-black text-white leading-none" style={{ color: percentage >= 100 ? color : undefined }}>
                            {current}
                        </span>
                        <span className="text-xs text-muted-foreground font-medium">/ {target}g</span>
                    </div>

                    <Badge variant="outline" className="w-fit mt-1 border-white/5 bg-white/5 text-[10px] font-mono text-zinc-400">
                        {percentage}% Fuelled
                    </Badge>
                </div>

                {/* Sağ tərəf: Recharts */}
                <div className="w-20 h-20 relative">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                data={data}
                                cx="50%"
                                cy="50%"
                                innerRadius={25}
                                outerRadius={35}
                                startAngle={90}
                                endAngle={-270}
                                dataKey="value"
                                stroke="none"
                            >
                                <Cell key="consumed" fill={color} />
                                <Cell key="remaining" fill="#27272a" />
                            </Pie>
                        </PieChart>
                    </ResponsiveContainer>

                    {/* Mərkəzi Nöqtə (Indicator) */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="w-1.5 h-1.5 rounded-full shadow-[0_0_8px_currentColor]" style={{ backgroundColor: color }} />
                    </div>
                </div>

            </CardContent>
        </Card>
    );
};

export default MacroRing;