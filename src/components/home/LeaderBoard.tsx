import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const LeaderBoard = () => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Rank</TableHead>
          <TableHead>Player</TableHead>
          <TableHead className="text-right">Amount Won</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {/* first row */}
        <TableRow>
          <TableCell className="font-medium">
            <div className="w-8 h-8 flex items-center justify-center font-bold text-yellow-400 text-lg">
              1
            </div>
          </TableCell>
          <TableCell>
            <div className="flex items-center gap-2">
              <img
                className="w-8 h-8 rounded border border-yellow-400/50"
                data-alt="User avatar for King_Gamer"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWPnpgOOLYvFnn9kXaiytNoom5xOo7FQIwClLSQ1KpHWjHh0X6TGyI4grOJBf_7kMvCnfWLyzXMIPOdNNeqyAsNrcU8tfFtIYYYQWpSHIRAt6brPdZbfCZtX12kG-Rw9atc_psbj8h7-gHO_RY98NHCCgTue3gLmgVYi11stkFwzF0EebVUv6jS_sNYx-UOYNIB-2PyWtZ5kv8JPLUpjrAsCmWV3Jm8vupgTllr_piofm6KBcY_fRfOvJpVrKPDEE0N09-ZlcTMzeG"
              />
              <div>
                <p className="text-sm font-bold text-white leading-tight">
                  King_Gamer
                </p>
                <p className="text-[10px] text-slate-400">14,200</p>
              </div>
            </div>
          </TableCell>
          <TableCell className="text-right">
            <span className="text-sm font-bold text-primary">
              ₦25,000 Prize
            </span>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

{
  /* <div class="glass rounded-lg p-6">
<div class="flex justify-between items-center mb-6">
<h3 class="font-bold text-white flex items-center gap-2">
<span class="material-icons text-primary">emoji_events</span>
                        Daily Leaderboard
                    </h3>
<button class="text-[10px] text-slate-400 hover:text-white uppercase font-bold tracking-widest">View All</button>
</div>
<div class="space-y-4">
<!-- Rank 1 -->
<div class="flex items-center justify-between p-3 bg-primary/5 rounded-lg border border-primary/20">
<div class="flex items-center gap-4">
<div class="w-8 h-8 flex items-center justify-center font-bold text-yellow-400 text-lg">1</div>
<img class="w-8 h-8 rounded border border-yellow-400/50" data-alt="User avatar for King_Gamer" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWPnpgOOLYvFnn9kXaiytNoom5xOo7FQIwClLSQ1KpHWjHh0X6TGyI4grOJBf_7kMvCnfWLyzXMIPOdNNeqyAsNrcU8tfFtIYYYQWpSHIRAt6brPdZbfCZtX12kG-Rw9atc_psbj8h7-gHO_RY98NHCCgTue3gLmgVYi11stkFwzF0EebVUv6jS_sNYx-UOYNIB-2PyWtZ5kv8JPLUpjrAsCmWV3Jm8vupgTllr_piofm6KBcY_fRfOvJpVrKPDEE0N09-ZlcTMzeG"/>
<div>
<p class="text-sm font-bold text-white leading-tight">King_Gamer</p>
<p class="text-[10px] text-slate-400">14,200 Points</p>
</div>
</div>
<span class="text-sm font-bold text-primary">₦25,000 Prize</span>
</div>
<!-- Rank 2 -->
<div class="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/5">
<div class="flex items-center gap-4">
<div class="w-8 h-8 flex items-center justify-center font-bold text-slate-300 text-lg">2</div>
<img class="w-8 h-8 rounded border border-white/20" data-alt="User avatar for NeonStriker" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDeiGDC4BqUZAvhiXvv5PztiAY_1L7Anf08YQtZpqA3OyKRxJOh-861Suv5_OJN9hopypJxqSTDWks2eF7grApfWXDQEPAPqOQkC6-27CwAacnSK7VHIEza8Xu-PwYGaMs5eTW9V3kwkUSVaKWIjDEIiLGh4_IORTTNmSaGI5ypykzm-MYAtoB33cTxB3K_-nvDvCna5ceFwf1AvQ_6zTRwAIqh63w9kYrkT0B6xU2ZZIN1X5NZ4hPGIsGpZL-3VEi-yyf40tNwfFRB"/>
<div>
<p class="text-sm font-bold text-white leading-tight">NeonStriker</p>
<p class="text-[10px] text-slate-400">12,850 Points</p>
</div>
</div>
<span class="text-sm font-bold text-slate-400">₦15,000 Prize</span>
</div>
<!-- Rank 3 -->
<div class="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/5">
<div class="flex items-center gap-4">
<div class="w-8 h-8 flex items-center justify-center font-bold text-orange-400 text-lg">3</div>
<img class="w-8 h-8 rounded border border-white/20" data-alt="User avatar for Shadow_X" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGFTybzGklt0S67STyNOFLLhLJXKMIOsUzByCYqipLYwUWT1AcZeZ4Uysd7W_C5jVXCdNjtySzEk82kR-_k_6St5d7uvfkOwlai0lsRQFPNVdkYgTLoCzrV5bPhsfPcYgnkI1y-V7msz7yr-QZZXVlrFNexPCOcieZMahhsGi5R6wzywpMA4iI2__Jc8ReJOzcGNQGw3aGBhLevg26TAEc-hHLHecfrogcbELf9B3UMFEX89nsMEEot2kX-d4zapooF3-qc6PVuh5P"/>
<div>
<p class="text-sm font-bold text-white leading-tight">Shadow_X</p>
<p class="text-[10px] text-slate-400">11,200 Points</p>
</div>
</div>
<span class="text-sm font-bold text-slate-400">₦7,500 Prize</span>
</div>
</div>
</div> */
}

export default LeaderBoard;
