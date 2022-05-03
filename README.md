# 서비스 링크

https://moonlight-roan.vercel.app/
Empty Car

# Meditation

호흡 안정, 명상을 위해 진정할 시간을 가져봐요

# RecordEmotion

자신의 감정을 기록하고, 기억해요

# Reminisce

기획중...

---

Sponsor: 휘뚜루마뚜루 \
Music From: tunetank (https://tunetank.com/)

---

### 컴포넌트 구조

- Signin

  - SignupModal
    - Signup

- Main

- Meditation

  - Timer

- EmotionDiary

  - CalHead
  - CalBody
    - Dates
      - DiaryModal

- CenterList
  - Center

### Props

- Signin >(isModal, closeModal)> SignupModal >(closeModal)> Signup

- Meditation >(m s narration)> Timer

- EmotionDiary >(year month goToday setMonth setYear)> CalHead
- EmotionDiary >(totalDate year month today prevLength thisLength)> CalBody >(date month year isToday isPrev isNext)> Dates >(isModal closeModal year month date nameData)> DiaryModal

- CenterList >(centerName location phonecall)> Center
