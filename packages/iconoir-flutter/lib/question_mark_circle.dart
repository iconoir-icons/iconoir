import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class QuestionMarkCircle extends StatelessWidget {
  const QuestionMarkCircle({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/QuestionMarkCircle.svg');
}
