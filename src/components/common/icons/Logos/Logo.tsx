interface LogoProps {
    className?: string
}

export default function Logo({ className }: LogoProps) {
    return (
        <svg width="107" height="17" viewBox="0 0 107 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M95.0469 16.2868V0.275391H102.25C102.984 0.275391 103.641 0.397731 104.222 0.642413C104.819 0.871803 105.324 1.20824 105.736 1.65173C106.149 2.07992 106.463 2.59987 106.677 3.21158C106.891 3.82328 106.998 4.49616 106.998 5.2302C106.998 5.97954 106.891 6.66007 106.677 7.27177C106.463 7.86818 106.149 8.38813 105.736 8.83162C105.324 9.25981 104.819 9.59625 104.222 9.84093C103.641 10.0703 102.984 10.185 102.25 10.185H98.0748V16.2868H95.0469ZM98.0748 7.56998H101.974C102.556 7.56998 103.014 7.41705 103.351 7.1112C103.687 6.79005 103.855 6.33892 103.855 5.7578V4.70261C103.855 4.12149 103.687 3.678 103.351 3.37215C103.014 3.0663 102.556 2.91337 101.974 2.91337H98.0748V7.56998Z" fill="#1976D2" />
            <path d="M85.0047 16.5619C83.9495 16.5619 82.9937 16.3861 82.1373 16.0343C81.2809 15.6826 80.5469 15.155 79.9352 14.4515C79.3388 13.7481 78.8723 12.884 78.5359 11.8594C78.1995 10.8348 78.0312 9.64201 78.0312 8.28096C78.0312 6.93521 78.1995 5.75003 78.5359 4.72542C78.8723 3.68553 79.3388 2.81384 79.9352 2.11038C80.5469 1.40692 81.2809 0.879327 82.1373 0.527596C82.9937 0.175865 83.9495 0 85.0047 0C86.0599 0 87.0157 0.175865 87.8721 0.527596C88.7284 0.879327 89.4625 1.40692 90.0742 2.11038C90.6859 2.81384 91.1523 3.68553 91.4735 4.72542C91.8099 5.75003 91.9781 6.93521 91.9781 8.28096C91.9781 9.64201 91.8099 10.8348 91.4735 11.8594C91.1523 12.884 90.6859 13.7481 90.0742 14.4515C89.4625 15.155 88.7284 15.6826 87.8721 16.0343C87.0157 16.3861 86.0599 16.5619 85.0047 16.5619ZM85.0047 13.8781C86.1516 13.8781 87.0615 13.4958 87.7344 12.7311C88.4226 11.9665 88.7667 10.896 88.7667 9.51967V7.04226C88.7667 5.66592 88.4226 4.59544 87.7344 3.8308C87.0615 3.06617 86.1516 2.68386 85.0047 2.68386C83.8577 2.68386 82.9402 3.06617 82.252 3.8308C81.5791 4.59544 81.2427 5.66592 81.2427 7.04226V9.51967C81.2427 10.896 81.5791 11.9665 82.252 12.7311C82.9402 13.4958 83.8577 13.8781 85.0047 13.8781Z" fill="#1976D2" />
            <path d="M71.9336 9.51979H65.2584V16.2868H62.2305V0.275391H65.2584V6.83593H71.9336V0.275391H74.9616V16.2868H71.9336V9.51979Z" fill="#1976D2" />
            <path d="M53.1868 16.5619C51.8104 16.5619 50.6406 16.3172 49.6771 15.8279C48.729 15.3385 47.9108 14.6962 47.2227 13.901L49.2642 11.9283C49.8148 12.5705 50.4265 13.0599 51.0993 13.3963C51.7875 13.7328 52.5445 13.901 53.3703 13.901C54.3031 13.901 55.0066 13.7022 55.4807 13.3046C55.9547 12.8917 56.1918 12.3412 56.1918 11.653C56.1918 11.1177 56.0389 10.6819 55.733 10.3455C55.4272 10.009 54.8537 9.76435 54.0126 9.61142L52.4986 9.38203C49.3025 8.87737 47.7044 7.32517 47.7044 4.72542C47.7044 4.00667 47.8344 3.35673 48.0943 2.77561C48.3696 2.19449 48.7596 1.69748 49.2642 1.28458C49.7689 0.87168 50.3729 0.558181 51.0764 0.344084C51.7952 0.114695 52.6057 0 53.5079 0C54.716 0 55.7712 0.198804 56.6735 0.596413C57.5758 0.994021 58.348 1.58279 58.9903 2.36271L56.9258 4.31252C56.5282 3.82316 56.0465 3.42555 55.4807 3.1197C54.9148 2.81384 54.2037 2.66092 53.3474 2.66092C52.4757 2.66092 51.8181 2.82914 51.3746 3.16558C50.9464 3.48672 50.7323 3.9455 50.7323 4.54191C50.7323 5.15362 50.9082 5.60475 51.2599 5.89531C51.6116 6.18587 52.1775 6.39997 52.9574 6.5376L54.4484 6.81287C56.0694 7.10343 57.2623 7.62338 58.0269 8.37272C58.8068 9.10676 59.1968 10.139 59.1968 11.4695C59.1968 12.2341 59.0592 12.9299 58.7839 13.5569C58.5239 14.1686 58.134 14.7039 57.614 15.1626C57.1093 15.6061 56.4823 15.9502 55.733 16.1949C54.999 16.4396 54.1502 16.5619 53.1868 16.5619Z" fill="#1976D2" />
            <path d="M42.9132 16.5388C42.2862 16.5388 41.8198 16.3859 41.514 16.0801C41.2234 15.7589 41.0781 15.3537 41.0781 14.8643V14.4514C41.0781 13.962 41.2234 13.5568 41.514 13.2356C41.8198 12.9145 42.2862 12.7539 42.9132 12.7539C43.5555 12.7539 44.022 12.9145 44.3125 13.2356C44.6031 13.5568 44.7484 13.962 44.7484 14.4514V14.8643C44.7484 15.3537 44.6031 15.7589 44.3125 16.0801C44.022 16.3859 43.5555 16.5388 42.9132 16.5388Z" fill="#1976D2" />
            <path d="M28.9648 16.2868V0.275391H36.1677C36.9017 0.275391 37.5593 0.397731 38.1404 0.642413C38.7368 0.871803 39.2415 1.20824 39.6544 1.65173C40.0673 2.07992 40.3808 2.59987 40.5949 3.21158C40.809 3.82328 40.916 4.49616 40.916 5.2302C40.916 5.97954 40.809 6.66007 40.5949 7.27177C40.3808 7.86818 40.0673 8.38813 39.6544 8.83162C39.2415 9.25981 38.7368 9.59625 38.1404 9.84093C37.5593 10.0703 36.9017 10.185 36.1677 10.185H31.9928V16.2868H28.9648ZM31.9928 7.56998H35.8924C36.4735 7.56998 36.9323 7.41705 37.2687 7.1112C37.6052 6.79005 37.7734 6.33892 37.7734 5.7578V4.70261C37.7734 4.12149 37.6052 3.678 37.2687 3.37215C36.9323 3.0663 36.4735 2.91337 35.8924 2.91337H31.9928V7.56998Z" fill="#191C1F" />
            <path d="M25.8543 16.2867H14.7518V13.4881L19.7755 9.08383C20.6318 8.33449 21.2588 7.66161 21.6565 7.0652C22.0541 6.45349 22.2529 5.79591 22.2529 5.09245V4.79424C22.2529 4.09078 22.0235 3.55554 21.5647 3.18851C21.1059 2.8062 20.5477 2.61504 19.8902 2.61504C19.0644 2.61504 18.4374 2.85208 18.0092 3.32615C17.581 3.78493 17.2751 4.34311 17.0916 5.00069L14.4766 3.99138C14.6448 3.45614 14.8818 2.95148 15.1877 2.47741C15.4935 1.98804 15.8758 1.55985 16.3346 1.19283C16.8087 0.825802 17.3592 0.535242 17.9862 0.321145C18.6132 0.107048 19.332 0 20.1425 0C20.9836 0 21.7329 0.122341 22.3905 0.367024C23.0481 0.596413 23.5986 0.925205 24.0421 1.3534C24.5009 1.78159 24.845 2.28625 25.0744 2.86737C25.319 3.44849 25.4414 4.08313 25.4414 4.7713C25.4414 5.44418 25.3343 6.05588 25.1202 6.60642C24.9061 7.15695 24.6156 7.68455 24.2486 8.18921C23.8815 8.67857 23.4533 9.15264 22.964 9.61142C22.4746 10.0549 21.9547 10.506 21.4041 10.9648L18.0321 13.7404H25.8543V16.2867Z" fill="#191C1F" />
            <path d="M0 0.275391H7.40928C8.06686 0.275391 8.65563 0.374792 9.17558 0.573596C9.71082 0.7724 10.162 1.04767 10.529 1.3994C10.896 1.75113 11.1713 2.18697 11.3548 2.70692C11.5536 3.21158 11.653 3.76976 11.653 4.38146C11.653 4.99317 11.5689 5.51312 11.4007 5.94131C11.2477 6.35421 11.0336 6.6983 10.7584 6.97356C10.4984 7.24883 10.1925 7.45528 9.84081 7.59292C9.50437 7.73055 9.15264 7.80701 8.78562 7.82231V7.95994C9.13735 7.95994 9.51202 8.02876 9.90963 8.16639C10.3225 8.30402 10.6972 8.52577 11.0336 8.83162C11.3854 9.12218 11.6759 9.5045 11.9053 9.97857C12.1347 10.4373 12.2494 11.0108 12.2494 11.699C12.2494 12.3413 12.1424 12.9453 11.9283 13.5112C11.7295 14.0617 11.4465 14.5434 11.0795 14.9563C10.7125 15.3692 10.2767 15.698 9.77199 15.9427C9.26734 16.1721 8.7168 16.2868 8.12039 16.2868H0V0.275391ZM3.02794 13.7176H7.24871C7.82983 13.7176 8.28096 13.5723 8.60211 13.2818C8.92325 12.9759 9.08383 12.5401 9.08383 11.9743V11.1943C9.08383 10.6285 8.92325 10.1927 8.60211 9.88681C8.28096 9.58096 7.82983 9.42803 7.24871 9.42803H3.02794V13.7176ZM3.02794 6.95063H6.76699C7.31753 6.95063 7.74572 6.80535 8.05157 6.51479C8.35742 6.20893 8.51035 5.78839 8.51035 5.25314V4.54204C8.51035 4.00679 8.35742 3.59389 8.05157 3.30333C7.74572 2.99748 7.31753 2.84455 6.76699 2.84455H3.02794V6.95063Z" fill="#191C1F" />
        </svg>
    )
}