import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class QuestionMark extends StatelessWidget {
  const QuestionMark({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/QuestionMark.svg');
}
