import InterviewCard from "@/components/InterviewCard";
import { Button } from "@/components/ui/button";
import { dummyInterviews } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { getCurrentUser } from "@/lib/actions/auth.action";
import {
  getInterviewsByUserId,
  getLatestInterviews,
} from "@/lib/actions/general.action";


const page = async() => {
  const user = await  getCurrentUser();
  const userInterviews = await getInterviewsByUserId(user?.id);
  const hasPasInterviews = userInterviews?.length > 0;


  return (
    <>
      <section className="card-cta">
        <div className="flex flex-col gap-6 max-w-lg">
          <h2>Get Interview Ready with AT-Powered Practice and Feedback</h2>
          <p className="text-lg">
            Practice on real interview questions & get instant feedback
          </p>
          <Button asChild className="btn-primary max-sm:w-full">
            <Link href="/interview">Start an Interview</Link>
          </Button>
        </div>
        <Image
          src="/robot.png"
          alt="robot-dude"
          width={400}
          height={400}
          className="max-sm:hidden"
        />
      </section>
      <section className="flex flex-col gap-6 mt-8">
        <h2>Your Interviews</h2>
        <div className="interviews-section flex flex-row ">
          {
            hasPasInterviews ? (
            userInterviews?.map((interview)=>(
            <InterviewCard {...interview} key={interview.id} />
            ))
            ) : (
                  <p>You haven&apos;t taken any interviews yet.</p>
            )
          }
        </div>
      </section>
      <section className="flex flex-col gap-6 mt-8">
        <h2>Take an Interview</h2>
        <div className="interviews-section flex-row">
          {dummyInterviews.map((interview) => (
            <InterviewCard {...interview} key={interview.id} />
          ))}
        </div>
      </section >
    </>
  );
};

export default page;
