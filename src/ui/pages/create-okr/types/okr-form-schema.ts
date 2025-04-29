import { z } from "zod";

export const okrFormSchema = z.object({
  goal: z.object({
    title: z.string().min(1, { message: "제목을 입력해주세요." }),
    description: z.string().optional(),
    dueDate: z.date().optional(),
  }),
  subGoals: z.array(
    z.object({
      title: z.string().min(1, { message: "제목을 입력해주세요." }),
      description: z.string().optional(),
      dueDate: z.date().optional(),
    })
  ),
});

export type OkrFormSchema = z.infer<typeof okrFormSchema>;
