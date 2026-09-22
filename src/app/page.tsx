import { redirect } from "next/navigation";

export default function HomePage() {
  redirect("/archive");
}




// import { getSheet, getUserState, getCurrentUser } from "@/lib/data";
// import StatsHeader from "@/components/StatsHeader";
// import CollapsibleSection from "@/components/CollapsibleSection";
// import QuestionRow from "@/components/QuestionRow";

// export default async function HomePage() {
//   const user = await getCurrentUser();
//   const steps = await getSheet("new");
//   const { progress, bookmarks, notes } = await getUserState(user?.id ?? null);

//   const totalQuestions = steps.reduce(
//     (sum, s) => sum + s.lectures.reduce((ls, l) => ls + l.questions.length, 0),
//     0
//   );
//   const solvedQuestions = steps.reduce(
//     (sum, s) =>
//       sum +
//       s.lectures.reduce(
//         (ls, l) => ls + l.questions.filter((q) => progress.get(q.id) === "solved").length,
//         0
//       ),
//     0
//   );

//   return (
//     <div>
//       <StatsHeader
//         title="Striver's A2Z DSA Sheet"
//         subtitle="The current, actively-maintained sheet. Missing an old favorite? Check the Old & Removed tab."
//         solved={solvedQuestions}
//         total={totalQuestions}
//       />

//       {!user && (
//         <p className="mb-4 rounded-lg border border-brand/30 bg-brand/10 px-4 py-2 text-sm text-brand">
//           You're browsing as a guest — sign in to save progress, bookmarks, and notes.
//         </p>
//       )}

//       {steps.map((step) => {
//         const stepTotal = step.lectures.reduce((s, l) => s + l.questions.length, 0);
//         const stepSolved = step.lectures.reduce(
//           (s, l) => s + l.questions.filter((q) => progress.get(q.id) === "solved").length,
//           0
//         );
//         return (
//           <CollapsibleSection
//             key={step.id}
//             title={step.title}
//             solvedCount={stepSolved}
//             totalCount={stepTotal}
//             level="step"
//             defaultOpen
//           >
//             {step.lectures.map((lecture) => {
//               const lecSolved = lecture.questions.filter((q) => progress.get(q.id) === "solved").length;
//               return (
//                 <CollapsibleSection
//                   key={lecture.id}
//                   title={lecture.title}
//                   solvedCount={lecSolved}
//                   totalCount={lecture.questions.length}
//                   level="lecture"
//                   defaultOpen
//                 >
//                   {lecture.questions.map((q) => (
//                     <QuestionRow
//                       key={q.id}
//                       question={q}
//                       userId={user?.id ?? null}
//                       initialSolved={progress.get(q.id) === "solved"}
//                       initialBookmarked={bookmarks.has(q.id)}
//                       initialNote={notes.get(q.id) ?? ""}
//                     />
//                   ))}
//                 </CollapsibleSection>
//               );
//             })}
//           </CollapsibleSection>
//         );
//       })}
//     </div>
//   );
// }
