/* esm.sh - esbuild bundle(caniuse-lite@1.0.30001373/data/features/text-size-adjust) es2022 production */
var r = Object.create;
var o = Object.defineProperty;
var u = Object.getOwnPropertyDescriptor;
var l = Object.getOwnPropertyNames;
var S = Object.getPrototypeOf, i = Object.prototype.hasOwnProperty;
var n = (C, B) => () => (B || C((B = { exports: {} }).exports, B), B.exports);
var p = (C, B, e, d) => {
  if (B && typeof B == "object" || typeof B == "function") {
    for (let t of l(B)) {
      !i.call(C, t) && t !== e && o(C, t, {
        get: () => B[t],
        enumerable: !(d = u(B, t)) || d.enumerable,
      });
    }
  }
  return C;
};
var x = (
  C,
  B,
  e,
) => (e = C != null ? r(S(C)) : {},
  p(
    B || !C || !C.__esModule
      ? o(e, "default", { value: C, enumerable: !0 })
      : e,
    C,
  ));
var a = n((F, A) => {
  A.exports = {
    A: {
      A: { 2: "J D E F A B zB" },
      B: {
        1: "P Q R S T U V W X Y Z c d e f g h i j k l a m H",
        33: "C K L G M N O",
      },
      C: {
        2: "0 1 2 3 4 5 6 7 8 9 0B mB I n J D E F A B C K L G M N O o p q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB nB SB oB TB UB b VB WB XB YB ZB aB bB cB dB eB fB gB hB iB P Q R pB S T U V W X Y Z c d e f g h i j k l a m H qB rB 1B 2B",
      },
      D: {
        1: "NB OB PB QB RB nB SB oB TB UB b VB WB XB YB ZB aB bB cB dB eB fB gB hB iB P Q R S T U V W X Y Z c d e f g h i j k l a m H qB rB 3B",
        2: "0 1 2 3 4 5 6 7 8 9 I n J D E F A B C K L G M N O o p q r s t u w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB",
        258: "v",
      },
      E: {
        2: "I n J D E F A B C K L G 4B sB 6B 7B 8B tB jB kB 9B AC BC uB vB wB CC lB DC",
        258: "5B",
      },
      F: {
        1: "CB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB b VB WB XB YB ZB aB bB cB dB eB fB gB hB iB P Q R pB S T U V W X Y Z",
        2: "0 1 2 3 4 5 6 7 8 9 F B C G M N O o p q r s t u v w x y z AB BB DB EC FC GC HC jB xB IC kB",
      },
      G: {
        2: "sB JC yB",
        33:
          "E KC LC MC NC OC PC QC RC SC TC UC VC WC XC YC ZC aC bC cC uB vB wB lB",
      },
      H: { 2: "dC" },
      I: { 1: "H", 2: "mB I eC fC gC hC yB iC jC" },
      J: { 2: "D A" },
      K: { 1: "b", 2: "A B C jB xB kB" },
      L: { 1: "H" },
      M: { 33: "a" },
      N: { 161: "A B" },
      O: { 1: "kC" },
      P: { 1: "lC mC nC oC pC tB qC rC sC tC uC lB vC", 2: "I" },
      Q: { 2: "wC" },
      R: { 2: "xC" },
      S: { 2: "yC" },
    },
    B: 7,
    C: "CSS text-size-adjust",
  };
});
var f = x(a()),
  { A: G, B: H, C: I } = f,
  { default: s, ...D } = f,
  c = s !== void 0 ? s : D;
export { c as default, G as A, H as B, I as C };
