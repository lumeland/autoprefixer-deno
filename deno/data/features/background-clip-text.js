/* esm.sh - esbuild bundle(caniuse-lite@1.0.30001373/data/features/background-clip-text) es2022 production */
var l = Object.create;
var d = Object.defineProperty;
var u = Object.getOwnPropertyDescriptor;
var c = Object.getOwnPropertyNames;
var n = Object.getPrototypeOf, p = Object.prototype.hasOwnProperty;
var s = (C, B) => () => (B || C((B = { exports: {} }).exports, B), B.exports);
var i = (C, B, e, o) => {
  if (B && typeof B == "object" || typeof B == "function") {
    for (let t of c(B)) {
      !p.call(C, t) && t !== e && d(C, t, {
        get: () => B[t],
        enumerable: !(o = u(B, t)) || o.enumerable,
      });
    }
  }
  return C;
};
var x = (
  C,
  B,
  e,
) => (e = C != null ? l(n(C)) : {},
  i(
    B || !C || !C.__esModule
      ? d(e, "default", { value: C, enumerable: !0 })
      : e,
    C,
  ));
var a = s((F, A) => {
  A.exports = {
    A: {
      A: { 2: "J D E F A B zB" },
      B: {
        1: "G M N O",
        33: "C K L P Q R S T U V W X Y Z c d e f g h i j k l a m H",
      },
      C: {
        1: "IB JB KB LB MB NB OB PB QB RB nB SB oB TB UB b VB WB XB YB ZB aB bB cB dB eB fB gB hB iB P Q R pB S T U V W X Y Z c d e f g h i j k l a m H qB rB",
        2: "0 1 2 3 4 5 6 7 8 9 0B mB I n J D E F A B C K L G M N O o p q r s t u v w x y z AB BB CB DB EB FB GB HB 1B 2B",
      },
      D: {
        33:
          "0 1 2 3 4 5 6 7 8 9 I n J D E F A B C K L G M N O o p q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB nB SB oB TB UB b VB WB XB YB ZB aB bB cB dB eB fB gB hB iB P Q R S T U V W X Y Z c d e f g h i j k l a m H qB rB 3B",
      },
      E: {
        1: "L G AC BC uB vB wB CC lB DC",
        16: "4B sB",
        33: "I n J D E F A B C K 5B 6B 7B 8B tB jB kB 9B",
      },
      F: {
        2: "F B C EC FC GC HC jB xB IC kB",
        33:
          "0 1 2 3 4 5 6 7 8 9 G M N O o p q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB b VB WB XB YB ZB aB bB cB dB eB fB gB hB iB P Q R pB S T U V W X Y Z",
      },
      G: {
        1: "aC bC cC uB vB wB lB",
        16: "sB JC yB KC",
        33: "E LC MC NC OC PC QC RC SC TC UC VC WC XC YC ZC",
      },
      H: { 2: "dC" },
      I: { 16: "mB eC fC gC", 33: "I H hC yB iC jC" },
      J: { 33: "D A" },
      K: { 16: "A B C jB xB kB", 33: "b" },
      L: { 33: "H" },
      M: { 1: "a" },
      N: { 2: "A B" },
      O: { 33: "kC" },
      P: { 33: "I lC mC nC oC pC tB qC rC sC tC uC lB vC" },
      Q: { 33: "wC" },
      R: { 33: "xC" },
      S: { 1: "yC" },
    },
    B: 7,
    C: "Background-clip: text",
  };
});
var f = x(a()),
  { A: G, B: H, C: I } = f,
  { default: r, ...D } = f,
  m = r !== void 0 ? r : D;
export { G as A, H as B, I as C, m as default };
