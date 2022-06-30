import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class InputField extends StatelessWidget {
  const InputField({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/InputField.svg');
}
