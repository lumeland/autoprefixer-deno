/* esm.sh - esbuild bundle(caniuse-lite@1.0.30001373/data/features/css-hyphens) es2022 production */
var r = Object.create;
var A = Object.defineProperty;
var l = Object.getOwnPropertyDescriptor;
var p = Object.getOwnPropertyNames;
var s = Object.getPrototypeOf, u = Object.prototype.hasOwnProperty;
var H = (C, B) => () => (B || C((B = { exports: {} }).exports, B), B.exports);
var S = (C, B, e, o) => {
  if (B && typeof B == "object" || typeof B == "function") {
    for (let t of p(B)) {
      !u.call(C, t) && t !== e && A(C, t, {
        get: () => B[t],
        enumerable: !(o = l(B, t)) || o.enumerable,
      });
    }
  }
  return C;
};
var i = (
  C,
  B,
  e,
) => (e = C != null ? r(s(C)) : {},
  S(
    B || !C || !C.__esModule
      ? A(e, "default", { value: C, enumerable: !0 })
      : e,
    C,
  ));
var d = H((F, a) => {
  a.exports = {
    A: {
      A: { 2: "J D E F zB", 33: "A B" },
      B: {
        33: "C K L G M N O",
        132: "P Q R S T U V W",
        260: "X Y Z c d e f g h i j k l a m H",
      },
      C: {
        1: "CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB nB SB oB TB UB b VB WB XB YB ZB aB bB cB dB eB fB gB hB iB P Q R pB S T U V W X Y Z c d e f g h i j k l a m H qB rB",
        2: "0B mB I n 1B 2B",
        33:
          "0 1 2 3 4 5 6 7 8 9 J D E F A B C K L G M N O o p q r s t u v w x y z AB BB",
      },
      D: {
        1: "X Y Z c d e f g h i j k l a m H qB rB 3B",
        2: "0 1 2 3 4 5 6 7 8 9 I n J D E F A B C K L G M N O o p q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB",
        132:
          "OB PB QB RB nB SB oB TB UB b VB WB XB YB ZB aB bB cB dB eB fB gB hB iB P Q R S T U V W",
      },
      E: {
        2: "I n 4B sB",
        33:
          "J D E F A B C K L G 5B 6B 7B 8B tB jB kB 9B AC BC uB vB wB CC lB DC",
      },
      F: {
        2: "0 1 2 3 4 5 6 7 8 9 F B C G M N O o p q r s t u v w x y z AB EC FC GC HC jB xB IC kB",
        132:
          "BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB b VB WB XB YB ZB aB bB cB dB eB fB gB hB iB P Q R pB S T U V W X Y Z",
      },
      G: {
        2: "sB JC",
        33:
          "E yB KC LC MC NC OC PC QC RC SC TC UC VC WC XC YC ZC aC bC cC uB vB wB lB",
      },
      H: { 2: "dC" },
      I: { 1: "H", 2: "mB I eC fC gC hC yB iC jC" },
      J: { 2: "D A" },
      K: { 1: "b", 2: "A B C jB xB kB" },
      L: { 1: "H" },
      M: { 1: "a" },
      N: { 2: "A B" },
      O: { 4: "kC" },
      P: { 1: "mC nC oC pC tB qC rC sC tC uC lB vC", 2: "I", 132: "lC" },
      Q: { 2: "wC" },
      R: { 132: "xC" },
      S: { 1: "yC" },
    },
    B: 5,
    C: "CSS Hyphenation",
  };
});
var n = i(d()),
  { A: G, B: I, C: c } = n,
  { default: f, ...D } = n,
  m = f !== void 0 ? f : D;
export { c as C, G as A, I as B, m as default };
