# JotForm Customization Guide for Value In Pass

## How to Apply Custom CSS in JotForm

1. **Log in to JotForm** and open your form (ID: 260144814219554)

2. **Go to Form Designer**:
   - Click on "Form Designer" in the left sidebar
   - Or click the "Design" button at the top

3. **Access Custom CSS**:
   - Click on "Settings" (gear icon) in the top right
   - Scroll down to "Form Options"
   - Click on "Custom CSS"
   - Paste the CSS code from `jotform-custom-css.txt`

4. **Save and Preview**:
   - Click "Save" 
   - Preview your form to see the changes

## Color Reference

Based on your design system:
- **Background (Inputs)**: `#EBEBEB` (oklch(0.92 0.001 52))
- **Text**: `#333333` (oklch(0.2 0 0))
- **Accent (Button)**: `#8B5C3C` (oklch(0.55 0.15 33)) - Warm golden-bronze
- **Button Text**: `#FAF8F3` (oklch(0.98 0.001 52)) - Soft cream
- **Border**: `#EBEBEB` (oklch(0.92 0.001 52))
- **Focus Ring**: `rgba(139, 92, 60, 0.5)` - Accent color with transparency

## Form Field Mapping

Make sure your JotForm fields match:
- **Client Name** → Full Name field
- **Phone Number** → Phone field
- **E-mail** → Email field
- **Comment** → Textarea/Message field

## Additional Customization Tips

### To Hide JotForm Logo:
The CSS already includes `.jotform-branding { display: none !important; }`

### To Match Fonts:
- **Headings**: Use 'Lora' serif font (if available in JotForm)
- **Body Text**: Use 'Inter' sans-serif font
- If fonts aren't available, JotForm will fall back to system fonts

### To Adjust Spacing:
Modify the `margin-bottom` values in the CSS:
- `.form-line`: Currently `1.5rem` (24px)
- Adjust as needed for your design

### To Change Button Style:
Modify `.form-submit-button` styles:
- Change `padding` for button size
- Change `border-radius` for rounded corners (currently 0 for sharp corners)
- Adjust `transform: scale()` for hover effects

## Testing

After applying the CSS:
1. Test all form fields
2. Check focus states
3. Verify button hover effects
4. Test on mobile devices
5. Ensure form submission works correctly

## Troubleshooting

If styles don't apply:
- Make sure you're using `!important` flags (already included)
- Clear browser cache
- Check JotForm's CSS specificity
- Verify you're in the correct form (ID: 260144814219554)
