
(function(){
  const root=document.getElementById('planner');
  if(!root) return;
  root.innerHTML=`
  <form id="plannerForm">
    <label>Difficulty<select name="difficulty">
      <option value="easy">Easy</option>
      <option value="normal" selected>Normal</option>
      <option value="hard">Hard</option>
    </select></label><br>
    <label>Party size <input type="number" name="party" min="1" max="8" value="4" style="width:4em"></label><br>
    <button type="submit">Plan!</button>
  </form><hr><pre id="plannerOut" aria-live="polite"></pre>`;
  const base={easy:8,normal:12,hard:16}, rs={easy:4,normal:6,hard:8}, meds={easy:.4,normal:.6,hard:1};
  root.querySelector('#plannerForm').addEventListener('submit',e=>{
    e.preventDefault(); const fd=new FormData(e.target); const d=fd.get('difficulty'); const n=+fd.get('party');
    const hunger=base[d]*n, stamina=rs[d]*n, medkits=Math.ceil(meds[d]*n), antid=Math.ceil(n/2);
    root.querySelector('#plannerOut').textContent=
`Recommended Minimums
——————————————
Total Hunger units ……… ${hunger}
Reserve‑Stamina ………… ${stamina}
Medkits …………………… ${medkits}
Antidotes ………………… ${antid}
Rope (m) ………………… ${5*n}
Piton placements …… ${10*n}`;
  });
})();
