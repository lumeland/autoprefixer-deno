/* esm.sh - esbuild bundle(caniuse-lite@1.0.30001373/data/features/css-color-adjust) es2022 production */
var l = Object.create;
var d = Object.defineProperty;
var s = Object.getOwnPropertyDescriptor;
var u = Object.getOwnPropertyNames;
var S = Object.getPrototypeOf, c = Object.prototype.hasOwnProperty;
var n = (C, B) => () => (B || C((B = { exports: {} }).exports, B), B.exports);
var p = (C, B, e, o) => {
  if (B && typeof B == "object" || typeof B == "function") {
    for (let t of u(B)) {
      !c.call(C, t) && t !== e && d(C, t, {
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
  p(
    B || !C || !C.__esModule
      ? d(e, "default", { value: C, enumerable: !0 })
      : e,
    C,
  ));
var a = n((G, A) => {
  A.exports = {
    A: {
      A: { 2: "J D E F A B zB" },
      B: {
        2: "C K L G M N O",
        33: "P Q R S T U V W X Y Z c d e f g h i j k l a m H",
      },
      C: {
        1: "HB IB JB KB LB MB NB OB PB QB RB nB SB oB TB UB b VB WB XB YB ZB aB bB cB dB eB fB gB hB iB P Q R pB S T U V W X Y Z c d e f g h i j k l a m H qB rB",
        2: "0 1 2 3 4 5 6 7 8 9 0B mB I n J D E F A B C K L G M N O o p q r s t u v w x y z AB BB CB DB EB FB GB 1B 2B",
      },
      D: {
        16: "I n J D E F A B C K L G M N O",
        33:
          "0 1 2 3 4 5 6 7 8 9 o p q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB nB SB oB TB UB b VB WB XB YB ZB aB bB cB dB eB fB gB hB iB P Q R S T U V W X Y Z c d e f g h i j k l a m H qB rB 3B",
      },
      E: {
        2: "I n 4B sB 5B",
        33: "J D E F A B C K L G 6B 7B 8B tB jB kB 9B AC BC uB vB wB CC lB DC",
      },
      F: {
        2: "F B C EC FC GC HC jB xB IC kB",
        33:
          "0 1 2 3 4 5 6 7 8 9 G M N O o p q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB b VB WB XB YB ZB aB bB cB dB eB fB gB hB iB P Q R pB S T U V W X Y Z",
      },
      G: {
        16:
          "E sB JC yB KC LC MC NC OC PC QC RC SC TC UC VC WC XC YC ZC aC bC cC uB vB wB lB",
      },
      H: { 2: "dC" },
      I: { 16: "mB I eC fC gC hC yB iC jC", 33: "H" },
      J: { 16: "D A" },
      K: { 2: "A B C jB xB kB", 33: "b" },
      L: { 16: "H" },
      M: { 1: "a" },
      N: { 16: "A B" },
      O: { 16: "kC" },
      P: { 16: "I lC mC nC oC pC tB qC rC sC tC uC lB vC" },
      Q: { 33: "wC" },
      R: { 16: "xC" },
      S: { 1: "yC" },
    },
    B: 5,
    C: "CSS color-adjust",
  };
});
var f = D(a()),
  { A: H, B: I, C: i } = f,
  { default: r, ...E } = f,
  m = r !== void 0 ? r : E;
export { H as A, I as B, i as C, m as default };
