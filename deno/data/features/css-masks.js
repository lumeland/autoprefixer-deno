/* esm.sh - esbuild bundle(caniuse-lite@1.0.30001373/data/features/css-masks) es2022 production */
var r = Object.create;
var A = Object.defineProperty;
var l = Object.getOwnPropertyDescriptor;
var u = Object.getOwnPropertyNames;
var S = Object.getPrototypeOf, n = Object.prototype.hasOwnProperty;
var p = (C, B) => () => (B || C((B = { exports: {} }).exports, B), B.exports);
var D = (C, B, e, o) => {
  if (B && typeof B == "object" || typeof B == "function") {
    for (let t of u(B)) {
      !n.call(C, t) && t !== e && A(C, t, {
        get: () => B[t],
        enumerable: !(o = l(B, t)) || o.enumerable,
      });
    }
  }
  return C;
};
var E = (
  C,
  B,
  e,
) => (e = C != null ? r(S(C)) : {},
  D(
    B || !C || !C.__esModule
      ? A(e, "default", { value: C, enumerable: !0 })
      : e,
    C,
  ));
var d = p((H, a) => {
  a.exports = {
    A: {
      A: { 2: "J D E F A B zB" },
      B: {
        2: "C K L G M",
        164: "P Q R S T U V W X Y Z c d e f g h i j k l a m H",
        3138: "N",
        12292: "O",
      },
      C: {
        1: "MB NB OB PB QB RB nB SB oB TB UB b VB WB XB YB ZB aB bB cB dB eB fB gB hB iB P Q R pB S T U V W X Y Z c d e f g h i j k l a m H qB rB",
        2: "0B mB",
        260:
          "0 1 2 3 4 5 6 7 8 9 I n J D E F A B C K L G M N O o p q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB 1B 2B",
      },
      D: {
        164:
          "0 1 2 3 4 5 6 7 8 9 I n J D E F A B C K L G M N O o p q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB nB SB oB TB UB b VB WB XB YB ZB aB bB cB dB eB fB gB hB iB P Q R S T U V W X Y Z c d e f g h i j k l a m H qB rB 3B",
      },
      E: {
        1: "vB wB CC lB DC",
        2: "4B sB",
        164: "I n J D E F A B C K L G 5B 6B 7B 8B tB jB kB 9B AC BC uB",
      },
      F: {
        2: "F B C EC FC GC HC jB xB IC kB",
        164:
          "0 1 2 3 4 5 6 7 8 9 G M N O o p q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB b VB WB XB YB ZB aB bB cB dB eB fB gB hB iB P Q R pB S T U V W X Y Z",
      },
      G: {
        1: "vB wB lB",
        164:
          "E sB JC yB KC LC MC NC OC PC QC RC SC TC UC VC WC XC YC ZC aC bC cC uB",
      },
      H: { 2: "dC" },
      I: { 164: "H iC jC", 676: "mB I eC fC gC hC yB" },
      J: { 164: "D A" },
      K: { 2: "A B C jB xB kB", 164: "b" },
      L: { 164: "H" },
      M: { 1: "a" },
      N: { 2: "A B" },
      O: { 164: "kC" },
      P: { 164: "I lC mC nC oC pC tB qC rC sC tC uC lB vC" },
      Q: { 164: "wC" },
      R: { 164: "xC" },
      S: { 260: "yC" },
    },
    B: 4,
    C: "CSS Masks",
  };
});
var f = E(d()),
  { A: I, B: M, C: c } = f,
  { default: s, ...F } = f,
  i = s !== void 0 ? s : F;
export { c as C, I as A, i as default, M as B };
