/* esm.sh - esbuild bundle(caniuse-lite@1.0.30001373/data/features/background-img-opts) es2022 production */
var n = Object.create;
var a = Object.defineProperty;
var s = Object.getOwnPropertyDescriptor;
var u = Object.getOwnPropertyNames;
var i = Object.getPrototypeOf, l = Object.prototype.hasOwnProperty;
var p = (C, B) => () => (B || C((B = { exports: {} }).exports, B), B.exports);
var S = (C, B, e, t) => {
  if (B && typeof B == "object" || typeof B == "function") {
    for (let o of u(B)) {
      !l.call(C, o) && o !== e && a(C, o, {
        get: () => B[o],
        enumerable: !(t = s(B, o)) || t.enumerable,
      });
    }
  }
  return C;
};
var c = (
  C,
  B,
  e,
) => (e = C != null ? n(i(C)) : {},
  S(
    B || !C || !C.__esModule
      ? a(e, "default", { value: C, enumerable: !0 })
      : e,
    C,
  ));
var A = p((E, d) => {
  d.exports = {
    A: {
      A: { 1: "F A B", 2: "J D E zB" },
      B: { 1: "C K L G M N O P Q R S T U V W X Y Z c d e f g h i j k l a m H" },
      C: {
        1: "0 1 2 3 4 5 6 7 8 9 I n J D E F A B C K L G M N O o p q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB nB SB oB TB UB b VB WB XB YB ZB aB bB cB dB eB fB gB hB iB P Q R pB S T U V W X Y Z c d e f g h i j k l a m H qB rB",
        2: "0B mB 1B",
        36: "2B",
      },
      D: {
        1: "0 1 2 3 4 5 6 7 8 9 G M N O o p q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB nB SB oB TB UB b VB WB XB YB ZB aB bB cB dB eB fB gB hB iB P Q R S T U V W X Y Z c d e f g h i j k l a m H qB rB 3B",
        516: "I n J D E F A B C K L",
      },
      E: {
        1: "D E F A B C K L G 7B 8B tB jB kB 9B AC BC uB vB wB CC lB DC",
        772: "I n J 4B sB 5B 6B",
      },
      F: {
        1: "0 1 2 3 4 5 6 7 8 9 B C G M N O o p q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB b VB WB XB YB ZB aB bB cB dB eB fB gB hB iB P Q R pB S T U V W X Y Z GC HC jB xB IC kB",
        2: "F EC",
        36: "FC",
      },
      G: {
        1: "E MC NC OC PC QC RC SC TC UC VC WC XC YC ZC aC bC cC uB vB wB lB",
        4: "sB JC yB LC",
        516: "KC",
      },
      H: { 132: "dC" },
      I: { 1: "H iC jC", 36: "eC", 516: "mB I hC yB", 548: "fC gC" },
      J: { 1: "D A" },
      K: { 1: "A B C b jB xB kB" },
      L: { 1: "H" },
      M: { 1: "a" },
      N: { 1: "A B" },
      O: { 1: "kC" },
      P: { 1: "I lC mC nC oC pC tB qC rC sC tC uC lB vC" },
      Q: { 1: "wC" },
      R: { 1: "xC" },
      S: { 1: "yC" },
    },
    B: 4,
    C: "CSS3 Background-image options",
  };
});
var f = c(A()),
  { A: F, B: G, C: H } = f,
  { default: r, ...m } = f,
  I = r !== void 0 ? r : m;
export { F as A, G as B, H as C, I as default };
