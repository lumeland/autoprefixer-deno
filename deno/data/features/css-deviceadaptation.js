/* esm.sh - esbuild bundle(caniuse-lite@1.0.30001399/data/features/css-deviceadaptation) es2022 production */
var r = Object.create;
var A = Object.defineProperty;
var i = Object.getOwnPropertyDescriptor;
var l = Object.getOwnPropertyNames;
var p = Object.getPrototypeOf, s = Object.prototype.hasOwnProperty;
var u = (C, B) => () => (B || C((B = { exports: {} }).exports, B), B.exports);
var D = (C, B, e, o) => {
  if (B && typeof B == "object" || typeof B == "function") {
    for (let t of l(B)) {
      !s.call(C, t) && t !== e && A(C, t, {
        get: () => B[t],
        enumerable: !(o = i(B, t)) || o.enumerable,
      });
    }
  }
  return C;
};
var S = (
  C,
  B,
  e,
) => (e = C != null ? r(p(C)) : {},
  D(
    B || !C || !C.__esModule
      ? A(e, "default", { value: C, enumerable: !0 })
      : e,
    C,
  ));
var d = u((E, a) => {
  a.exports = {
    A: {
      A: { 2: "J D E F 1B", 164: "A B" },
      B: {
        66: "P Q R S T U V W X Y Z c d e f g h i j k l m n o a H",
        164: "C K L G M N O",
      },
      C: {
        2: "0 1 2 3 4 5 6 7 8 9 2B oB I p J D E F A B C K L G M N O q r s t u v w x y z AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB pB UB qB VB WB b XB YB ZB aB bB cB dB eB fB gB hB iB jB kB P Q R rB S T U V W X Y Z c d e f g h i j k l m n o a H sB 3B 4B",
      },
      D: {
        2: "I p J D E F A B C K L G M N O q r s t u v w x y z",
        66:
          "0 1 2 3 4 5 6 7 8 9 AB BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB pB UB qB VB WB b XB YB ZB aB bB cB dB eB fB gB hB iB jB kB P Q R S T U V W X Y Z c d e f g h i j k l m n o a H sB 5B 6B",
      },
      E: {
        2: "I p J D E F A B C K L G 7B tB 8B 9B AC BC uB lB mB CC DC EC vB wB xB yB nB FC",
      },
      F: {
        2: "0 1 2 3 4 5 6 7 8 9 F B C G M N O q r s t u v w x y z AB GC HC IC JC lB zB KC mB",
        66:
          "BB CB DB EB FB GB HB IB JB KB LB MB NB OB PB QB RB SB TB UB VB WB b XB YB ZB aB bB cB dB eB fB gB hB iB jB kB P Q R rB S T U V W X Y Z",
      },
      G: {
        2: "E tB LC 0B MC NC OC PC QC RC SC TC UC VC WC XC YC ZC aC bC cC dC eC vB wB xB yB nB",
      },
      H: { 292: "fC" },
      I: { 2: "oB I H gC hC iC jC 0B kC lC" },
      J: { 2: "D A" },
      K: { 2: "A b", 292: "B C lB zB mB" },
      L: { 2: "H" },
      M: { 2: "a" },
      N: { 164: "A B" },
      O: { 2: "mC" },
      P: { 2: "I nC oC pC qC rC uB sC tC uC vC wC nB xC yC" },
      Q: { 66: "zC" },
      R: { 2: "0C" },
      S: { 2: "1C" },
    },
    B: 5,
    C: "CSS Device Adaptation",
  };
});
var n = S(d()),
  { A: F, B: G, C: H } = n,
  { default: f, ...c } = n,
  I = f !== void 0 ? f : c;
export { F as A, G as B, H as C, I as default };
