import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Suggestion extends StatelessWidget {
  const Suggestion({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/Suggestion.svg');
}
