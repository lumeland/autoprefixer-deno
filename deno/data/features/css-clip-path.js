/* esm.sh - esbuild bundle(caniuse-lite@1.0.30001373/data/features/css-clip-path) es2022 production */
var f = Object.create;
var r = Object.defineProperty;
var l = Object.getOwnPropertyDescriptor;
var s = Object.getOwnPropertyNames;
var u = Object.getPrototypeOf, H = Object.prototype.hasOwnProperty;
var S = (C, B) => () => (B || C((B = { exports: {} }).exports, B), B.exports);
var c = (C, B, e, o) => {
  if (B && typeof B == "object" || typeof B == "function") {
    for (let t of s(B)) {
      !H.call(C, t) && t !== e && r(C, t, {
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
) => (e = C != null ? f(u(C)) : {},
  c(
    B || !C || !C.__esModule
      ? r(e, "default", { value: C, enumerable: !0 })
      : e,
    C,
  ));
var A = S((E, p) => {
  p.exports = {
    A: {
      A: { 2: "J D E F A B zB" },
      B: {
        2: "C K L G M N",
        260: "P Q R S T U V W X Y Z c d e f g h i j k l a m H",
        3138: "O",
      },
      C: {
        1: "NB OB PB QB RB nB SB oB TB UB b VB WB XB YB ZB aB bB cB dB eB fB gB hB iB P Q R pB S T U V W X Y Z c d e f g h i j k l a m H qB rB",
        2: "0B mB",
        132:
          "0 1 2 3 4 5 6 7 8 9 I n J D E F A B C K L G M N O o p q r s t u v w x y z AB BB CB DB EB FB 1B 2B",
        644: "GB HB IB JB KB LB MB",
      },
      D: {
        2: "I n J D E F A B C K L G M N O o p q r s",
        260:
          "OB PB QB RB nB SB oB TB UB b VB WB XB YB ZB aB bB cB dB eB fB gB hB iB P Q R S T U V W X Y Z c d e f g h i j k l a m H qB rB 3B",
        292:
          "0 1 2 3 4 5 6 7 8 9 t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB",
      },
      E: {
        2: "I n J 4B sB 5B 6B",
        260: "L G 9B AC BC uB vB wB CC lB DC",
        292: "D E F A B C K 7B 8B tB jB kB",
      },
      F: {
        2: "F B C EC FC GC HC jB xB IC kB",
        260:
          "BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB b VB WB XB YB ZB aB bB cB dB eB fB gB hB iB P Q R pB S T U V W X Y Z",
        292: "0 1 2 3 4 5 6 7 8 9 G M N O o p q r s t u v w x y z AB",
      },
      G: {
        2: "sB JC yB KC LC",
        260: "WC XC YC ZC aC bC cC uB vB wB lB",
        292: "E MC NC OC PC QC RC SC TC UC VC",
      },
      H: { 2: "dC" },
      I: { 2: "mB I eC fC gC hC yB", 260: "H", 292: "iC jC" },
      J: { 2: "D A" },
      K: { 2: "A B C jB xB kB", 260: "b" },
      L: { 260: "H" },
      M: { 1: "a" },
      N: { 2: "A B" },
      O: { 292: "kC" },
      P: { 292: "I lC mC nC oC pC tB qC rC sC tC uC lB vC" },
      Q: { 292: "wC" },
      R: { 260: "xC" },
      S: { 644: "yC" },
    },
    B: 4,
    C: "CSS clip-path property (for HTML)",
  };
});
var d = i(A()),
  { A: F, B: G, C: I } = d,
  { default: a, ...n } = d,
  L = a !== void 0 ? a : n;
export { F as A, G as B, I as C, L as default };
