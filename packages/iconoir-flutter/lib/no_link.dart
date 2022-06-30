import 'package:flutter/widgets.dart';
import 'package:flutter_svg/flutter_svg.dart';

class NoLink extends StatelessWidget {
  const NoLink({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) => SvgPicture.asset('icons/NoLink.svg');
}
