import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Basketball extends StatelessWidget {
  const Basketball({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/Basketball.svg');
}
