/* esm.sh - esbuild bundle(caniuse-lite@1.0.30001373/data/features/text-overflow) es2022 production */
var l = Object.create;
var A = Object.defineProperty;
var s = Object.getOwnPropertyDescriptor;
var u = Object.getOwnPropertyNames;
var S = Object.getPrototypeOf, n = Object.prototype.hasOwnProperty;
var p = (C, B) => () => (B || C((B = { exports: {} }).exports, B), B.exports);
var x = (C, B, e, o) => {
  if (B && typeof B == "object" || typeof B == "function") {
    for (let t of u(B)) {
      !n.call(C, t) && t !== e && A(C, t, {
        get: () => B[t],
        enumerable: !(o = s(B, t)) || o.enumerable,
      });
    }
  }
  return C;
};
var D = (
  C,
  B,
  e,
) => (e = C != null ? l(S(C)) : {},
  x(
    B || !C || !C.__esModule
      ? A(e, "default", { value: C, enumerable: !0 })
      : e,
    C,
  ));
var f = p((G, d) => {
  d.exports = {
    A: {
      A: { 1: "J D E F A B", 2: "zB" },
      B: { 1: "C K L G M N O P Q R S T U V W X Y Z c d e f g h i j k l a m H" },
      C: {
        1: "0 1 2 3 4 5 6 7 8 9 D E F A B C K L G M N O o p q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB nB SB oB TB UB b VB WB XB YB ZB aB bB cB dB eB fB gB hB iB P Q R pB S T U V W X Y Z c d e f g h i j k l a m H qB rB",
        8: "0B mB I n J 1B 2B",
      },
      D: {
        1: "0 1 2 3 4 5 6 7 8 9 I n J D E F A B C K L G M N O o p q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB nB SB oB TB UB b VB WB XB YB ZB aB bB cB dB eB fB gB hB iB P Q R S T U V W X Y Z c d e f g h i j k l a m H qB rB 3B",
      },
      E: {
        1: "I n J D E F A B C K L G 4B sB 5B 6B 7B 8B tB jB kB 9B AC BC uB vB wB CC lB DC",
      },
      F: {
        1: "0 1 2 3 4 5 6 7 8 9 B C G M N O o p q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB b VB WB XB YB ZB aB bB cB dB eB fB gB hB iB P Q R pB S T U V W X Y Z jB xB IC kB",
        33: "F EC FC GC HC",
      },
      G: {
        1: "E sB JC yB KC LC MC NC OC PC QC RC SC TC UC VC WC XC YC ZC aC bC cC uB vB wB lB",
      },
      H: { 1: "dC" },
      I: { 1: "mB I H eC fC gC hC yB iC jC" },
      J: { 1: "D A" },
      K: { 1: "b kB", 33: "A B C jB xB" },
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
    C: "CSS3 Text-overflow",
  };
});
var a = D(f()),
  { A: H, B: I, C: c } = a,
  { default: r, ...E } = a,
  i = r !== void 0 ? r : E;
export { c as C, H as A, I as B, i as default };
