// Ekip üyelerini buraya ekleyin. İsimler sitede asla açık yazılmaz;
// balonun üzerine gelince maskelenmiş hali görünür (ör. "Berk Çiçek" -> "b****k").
// name boş ("") bırakılırsa balon isimsiz yer tutucu olarak durur.
export interface TeamMember {
  name: string;
}

export const teamMembers: TeamMember[] = [
  { name: "Berk Çiçek" },
  { name: "" },
  { name: "" },
  { name: "" },
  { name: "" },
  { name: "" },
  { name: "" },
  { name: "" },
  { name: "" },
  { name: "" },
  { name: "" },
  { name: "" },
];
