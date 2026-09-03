import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

interface NumericalBoxProps {
  RightAns: number;
}

export function NumericalBox({ RightAns }: NumericalBoxProps) {
  const [NumValue, setNumValue] = useState<number | "">("");
  const [checkNow, setcheckNow] = useState(false);
  const [isRight, setisRight] = useState(false);

  const handleSubmit = () => {
    setcheckNow(true);
    if (NumValue === RightAns) {
      setisRight(true);
    } else {
      setisRight(false);
    }
  };

  return (
    <div>
      <div className="flex items-center space-x-2">
        <Input
          type="number"
          placeholder="Enter your answer :"
          className="rounded-lg border-white/10 bg-white/[0.03] sm:w-5/9 lg:w-full"
          value={NumValue}
          onChange={(e) => {
            setNumValue(parseFloat(e.target.value));
            setcheckNow(false);
          }}
        />
        <Button
          type="button"
          variant="ghost"
          className="w-2/3"
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </div>
      {isRight ? (
        <h1 className="px-2 py-2 text-xl font-bold text-success">
          Correct Answer
        </h1>
      ) : (
        NumValue &&
        checkNow ? (
          <h1 className="px-1 py-1 font-bold text-danger">
            Wrong ,<span className="text-success"> The Right Answer is : &quot;{RightAns}&quot;</span>
          </h1>
        ) : (
          ""
        )
      )}
    </div>
  );
}
