import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class Google extends StatelessWidget {
  const Google({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/Google.svg');
}
